<script setup lang="ts">
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
import { useCursorHover } from '@/directives/useCursorHover';
import { DarkTheme, LightTheme } from '@/constants/app';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();
</script>

<template>
    <button
        v-cursor-hover
        data-aos="zoom-in-up"
        class="change-theme-button"
        @click="themeStore.toggle();"
    >
        <img
            v-show="themeStore.theme === DarkTheme"
            src="@/assets/images/icons/sun.svg"
            class="icon sun-icon"
            width="1000"
            height="1000"
            :alt="t('navbar.images.sun')"
        >
        <img
            v-show="themeStore.theme === LightTheme"
            src="@/assets/images/icons/moon.svg"
            class="icon"
            width="1000"
            height="1000"
            :alt="t('navbar.images.moon')"
        >
    </button>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.change-theme-button {
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    .icon {
        width: 2.2rem;
        height: auto;
    }
    .sun-icon {
        // change black svg into white
        filter: invert(100%);
    }
}

@media (min-width: @first-breakpoint) {
    .change-theme-button {
        .icon {
            width: 2.5rem;
        }
    }
}
</style>
