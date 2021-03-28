<template lang="pug">
v-app
  v-main
    .v-container.pa-4
      v-layout.text-center(column, justify-center, align-center)
        .text-h1 Это бот?
        .text-subtitle-1 Простое расширение, которое позволяет быстро увидеть, бот ли пользователь в комментариях на vc.ru, TJournal и DTF.
        .text-subtitle-1 Показывает важную информацию типа даты регистрации пользователя и количества комментариев.
        .text-subtitle-1
          | {{ "Код расширения " }}
          a(
            target='_blank',
            href='https://github.com/backmeupplz/vc-bots-finder'
          ) открыт
          | {{ ". Код этого сайта " }}
          a(
            target='_blank',
            href='https://github.com/backmeupplz/vc-bots-finder-landing'
          ) тоже
          | .
        .text-body-1.mt-4
          | {{ "Скачать для " }}
          a(
            target='_blank',
            href='https://chrome.google.com/webstore/detail/fbjbccjcmmnegakmjkklplmijeilnbhd'
          ) Хрома
          | {{ " и " }}
          a(
            target='_blank',
            href='https://addons.mozilla.org/en-US/firefox/addon/vc-is-this-a-bot/'
          ) Фаерфокса
          | .
        .text-body-1.mt-8
          a(href='https://terms.borodutch.com', target='_blank') Условия использования
        .text-body-1
          a(href='https://privacy.borodutch.com', target='_blank') Политика конфиденциальности
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {}
</script>
