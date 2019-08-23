<template>
  <v-container class="fill-height" fluid justify-center align-center>
        <v-flex xs11 sm8 Maryland3 lg3 SG3>
            <v-card class="elevation-12">
              <v-toolbar color="info" dark flat>
                <v-toolbar-title>Inicia Sesión</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" name="username" type="text" color="info"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" type="password" color="info"></v-text-field>
                  <v-btn block outlined color="info">Iniciar Sesión</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
      </v-container>
</template>
