<template lang="pug">
.about.scrollbars
  .container
    .section
      .content
        .has-text-centered
          router-link(:to="{ name: 'welcome' }")
            img(src="@/assets/thumbnail-transparent.png", width="480", alt="What is a Day?")
          h1.title.is-size-1.is-hidden What is a Day?
          h2.subtitle.is-size-4 A MinuteLabs.io Project
          p
            router-link.button.btn-dark(:to="{ name: 'welcome' }")
              b-icon(icon="arrow-left")
              span back to the lab
          p More fun stuff at <a href="https://minutelabs.io" target="_blank">minutelabs.io</a>

        h3.title.is-size-4 Credits
        p.
          This project was developed and conceived by Jasper Palfree.

          It wouldn't have been anywhere as visually appealing without
          Ever Salazar and Arcadi Garcia Rius who did the amazing artwork.

          And this wouldn't have been built without the support of the whole
          MinuteEarth team.

        h3.title.is-size-4 Special Thanks
        p.
          Special thanks to <a href="https://eater.net/" target="_blank">Ben Eater</a>
          for discussions and a technical insight that helped me close the seams
          between the interactivity and the "video".

        h3.title.is-size-4 Thank you, Patreon Supporters! (so much)
        p.
          Geeks like you are the reason I build things.

        <a href="https://www.patreon.com/bePatron?u=617966" target="_blank">
          <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="217" height="51">
        </a>

        h3.title.is-size-4 Source Code
        p.
          As always, freely available on
          <a href="https://github.com/minutelabsio/what-is-a-day" target="_blank">github</a>.

        h3.title.is-size-4 Bug Reports
        p.
          If you find a bug, you can post it on
          <a href="https://www.patreon.com/minutelabsio" target="_blank">patreon</a>,
          <a href="mailto:bugs@minutelabs.io">email us</a>,
          or post it on <a href="https://github.com/minutelabsio/what-is-a-day" target="_blank">github</a>.

        h3.title.is-size-4 Music
        p.
          Candlepower by Chris Zabriskie is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution license</a>
          <br/>
          Source: <a href="http://chriszabriskie.com/divider/" target="_blank">chriszabriskie.com/divider/</a>
          <br/>
          Artist: <a href="http://chriszabriskie.com/" target="_blank">chriszabriskie.com</a>
</template>

<style lang="sass" scoped>
.about
  height: 100%
  overflow: auto
</style>
