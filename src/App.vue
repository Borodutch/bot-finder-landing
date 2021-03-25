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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {}
</script>
