<template>
<div>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            <p class="text-md-center">LA MEJOR ASESORÍA EN CONSTRUCCIÓN DE MARCA</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

<v-banner
  elevation="7"
  icon="$mdiVuetify"
  class="text-md-center"
>Somos Sin señal, al querer construir su marca piense primero en nosotros. Más de una semana de experiencia en todos los sectores de la economía ofreciendo soluciones de calidad.</v-banner>


<h2 class="text-md-center mt-5">Nuestro servicios</h2>


    <div class="container-fluid mb-5 mt-5">
    <div class="row mt-md-5 mt-sm-5 mt-xs-5">
  <v-card
    v-for="articulo in articulos" :key="articulo.id"
    class="mx-auto"
    color="#BA9BCF"
    dark
    max-width="300"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-signal
      </v-icon>
      <span class="title font-weight-black">{{articulo.nombre}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{articulo.descripcion}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <!-- <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item>Producto disponible para {{articulo.categoria.nombre}}</v-list-item>
        </v-list-item-content>

        <!-- <v-row 
          align="center"
          justify="end" -->
        <!-- > -->
          <!-- <v-icon class="mr-1">
            mdi-heart
          </v-icon> -->
          <!-- <span class="subheading mr-2">256</span> -->
          <!-- <span class="mr-1">·</span> -->
          <!-- <v-icon class="mr-1">
            mdi-share-variant
          </v-icon> -->
          <!-- <span class="subheading">45</span> -->
        <!-- </v-row> -->
      </v-list-item>
    </v-card-actions>
  </v-card>  
</div>
</div>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Los mejores en asesoría de marca, todos nuestros colaboradores están listos para resolver sus inquietudes atendiendo de la mejor manera todos sus requerimientos. Su satisfacción es nuestro compromiso. No dude en contactarnos al <a href="tel:+5744444444">(+57) 4 4444444</a>o escribanos al correo <a href="mailto:sinseñal@gmail.com">sinseñal@gmail.com</a>
      </v-card-text>
<a href="https://github.com/Group64">https://github.com/Group64</a>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sin señal</strong>
      </v-card-text>
    </v-card>
  </v-footer>
   </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'HelloWorld',
     data() {
        return {
            datos: null,
            articulos: [],
            items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],  
        };

    },
    mounted() {
     axios.get('http://localhost:3000/api/articulo/list')
    .then(response => (this.articulos = response.data));

    },
    
}
</script>