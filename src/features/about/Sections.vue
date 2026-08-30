<script setup lang="ts">
import { computed, ref } from "vue";
import { t } from "../../i18n/utils/translate";
import { locale } from "../../i18n/store";
import { LOCALE_DEFAULT } from "../../i18n/constants";
import Banner from "../../components/Banner.vue";
import Button from "../../components/Button.vue";
import HobbyCarousel from "./components/HobbyCarousel.vue";
import HobbyCard from "./components/HobbyCard.vue";
import ShowCard from "./components/ShowCard.vue";
import MusicCard from "./components/MusicCard.vue";
import { useNowPlaying } from "./composables/useNowPlaying";
import { books, shows, music, type HobbyCategory, type MusicEntry } from "../../content/hobbies";

const { isAnyPlaying } = useNowPlaying();

const currentLocale = computed(() => locale.value ?? LOCALE_DEFAULT);

interface HobbyCardItem {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  footer?: string;
  rating?: number;
  body?: string;
  coverUrl?: string;
}

const activeCategory = ref<HobbyCategory>("books");

const categories: { id: HobbyCategory; labelKey: string }[] = [
  { id: "books", labelKey: "hobbies-books" },
  { id: "shows", labelKey: "hobbies-shows" },
  { id: "music", labelKey: "hobbies-music" },
];

const bookItems = computed<HobbyCardItem[]>(() =>
  books.map((book) => {
    const statusLabel = book.status === "finished" ? t("hobby-finished") : t("hobby-current");
    const loc = currentLocale.value;

    return {
      eyebrow: String(book.year),
      badge: book.genre[loc],
      title: book.title[loc],
      subtitle: book.author,
      footer: statusLabel,
      rating: book.rating,
      body: book.synopsis[loc] || book.review[loc],
      coverUrl: book.coverUrl,
    };
  }),
);

const showItems = computed<HobbyCardItem[]>(() =>
  shows.map((show) => {
    const loc = currentLocale.value;

    return {
      eyebrow: show.year || undefined,
      badge: show.genre[loc],
      title: show.title[loc],
      subtitle: show.type === "movie" ? t("hobby-movie") : t("hobby-series"),
      rating: show.rating,
      body: show.synopsis[loc] || undefined,
      coverUrl: show.posterUrl || undefined,
    };
  }),
);

const activeItems = computed<(HobbyCardItem | MusicEntry)[]>(() => {
  switch (activeCategory.value) {
    case "books":
      return bookItems.value;
    case "shows":
      return showItems.value;
    case "music":
      return music;
    default:
      return [];
  }
});

</script>

<template>
  <section class="hobbies">
    <div class="grid">
      <div class="hobbies-title">
        <Banner class="hobbies-title-banner" :copy="t('about')" size="sm" />
        <h2 class="hobbies-title-copy">{{ t("hobbies") }}</h2>
        <p class="hobbies-title-description">{{ t("hobbies-copy") }}</p>
      </div>
    </div>

    <div class="hobbies-panel">
      <div class="grid">
        <div class="hobbies-tabs">
          <Button
            v-for="category in categories"
            :key="category.id"
            :variant="activeCategory === category.id ? 'accent' : 'border'"
            size="sm"
            @click="activeCategory = category.id"
          >
            {{ t(category.labelKey) }}
          </Button>
        </div>

        <div class="hobbies-content" v-if="activeItems.length > 0">
          <HobbyCarousel :items="activeItems" :pause-autoplay="isAnyPlaying" v-slot="{ item, active, select }">
            <MusicCard
              v-if="activeCategory === 'music'"
              :artist="(item as MusicEntry).artist"
              :song-title="(item as MusicEntry).songTitle"
              :genre="(item as MusicEntry).genre[currentLocale]"
              :preview-url="(item as MusicEntry).previewUrl"
              :cover-url="(item as MusicEntry).coverUrl"
              :active="active"
              @select="select"
            />
            <ShowCard
              v-else-if="activeCategory === 'shows'"
              :eyebrow="(item as HobbyCardItem).eyebrow"
              :badge="(item as HobbyCardItem).badge"
              :title="(item as HobbyCardItem).title"
              :subtitle="(item as HobbyCardItem).subtitle"
              :rating="(item as HobbyCardItem).rating"
              :body="(item as HobbyCardItem).body"
              :cover-url="(item as HobbyCardItem).coverUrl"
            />
            <HobbyCard
              v-else
              :eyebrow="(item as HobbyCardItem).eyebrow"
              :badge="(item as HobbyCardItem).badge"
              :title="(item as HobbyCardItem).title"
              :subtitle="(item as HobbyCardItem).subtitle"
              :footer="(item as HobbyCardItem).footer"
              :rating="(item as HobbyCardItem).rating"
              :body="(item as HobbyCardItem).body"
              :cover-url="(item as HobbyCardItem).coverUrl"
            />
          </HobbyCarousel>
        </div>
        <p class="hobbies-empty" v-else>—</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hobbies {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-beige-400);
  padding-top: var(--space-xl);
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
    padding-bottom: 144px;
  }

  &-title {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }

    &-banner {
      margin-bottom: var(--space-xs);
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-description {
      max-width: 42rem;
      font-size: var(--font-size-md);
      color: var(--color-text-300);
      line-height: 1.6;
    }
  }

  &-panel {
    width: 100%;
  }

  &-tabs {
    grid-column: 1 / 13;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-xxl);
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-content {
    grid-column: 1 / 13;
  }

  &-empty {
    grid-column: 1 / 13;
    color: var(--color-text-300);
    text-align: center;
  }
}
</style>
