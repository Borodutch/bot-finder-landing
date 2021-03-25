<template lang="pug">
v-app
  v-main
    .v-container.pa-4
      v-layout.text-center(column, justify-center, align-center)
        h1 VC Это бот?
        subtitle-1 Простое расширение, которое позволяет быстро увидеть, бот ли пользователь в комментариях.
        subtitle-1 Показывает важную информацию типа даты регистрации пользователя и количества комментариев.
        body-1.mt-4
          | {{ "Скачать для " }}
          a(href='google.com') Хрома
          | {{ ", " }}
          a(href='google.com') Фаерфокса
          | {{ ", " }}
          a(href='google.com') Сафари
          | {{ ", " }}
          a(href='google.com') Оперы
          | .
        body-1.mt-8
          a(href='https://terms.borodutch.com', target='_blank') Условия использования
        body-1
          a(href='https://privacy.borodutch.com', target='_blank') Политика конфиденциальности
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {}
</script>
