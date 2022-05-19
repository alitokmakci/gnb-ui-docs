<template>
  <Layout>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Variables</h1>
        <p class="subtitle">
          <b>GNB UI</b> has some global variables such as colors, breakpoints
          etc.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="has-table">
          <table class="table dark bordered striped">
            <thead>
              <tr>
                <th style="width: 160px">Name</th>
                <th>Default Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td>$white</td>
                <td>rgba(255, 255, 255)</td>
                <td>White color for theming</td>
              </tr>
              <tr>
                <td>$primary</td>
                <td>rgb(26, 92, 255)</td>
                <td>Primary color for theming</td>
              </tr>
              <tr>
                <td>$secondary</td>
                <td>rgb(125, 51, 255)</td>
                <td>Secondary color for theming</td>
              </tr>
              <tr>
                <td>$success</td>
                <td>rgb(70, 201, 58)</td>
                <td>Success color for theming</td>
              </tr>
              <tr>
                <td>$warning</td>
                <td>rgb(255, 186, 0)</td>
                <td>Warning color for theming</td>
              </tr>
              <tr>
                <td>$info</td>
                <td>rgb(0, 175, 240)</td>
                <td>Info color for theming</td>
              </tr>
              <tr>
                <td>$danger</td>
                <td>rgb(255, 71, 87)</td>
                <td>Danger color for theming</td>
              </tr>
              <tr>
                <td>$dark</td>
                <td>rgb(0, 0, 0)</td>
                <td>Dark color for theming</td>
              </tr>
              <tr>
                <td>$colors</td>
                <td>
                  ("primary": $primary, "secondary": $secondary, "success":
                  $success, "info": $info, "warning": $warning, "danger":
                  $danger, "dark": $dark)
                </td>
                <td>Colors map to build classes</td>
              </tr>
              <tr>
                <td>$gray-1</td>
                <td>rgb(230, 233, 234)</td>
                <td>Gray color for theming</td>
              </tr>
              <tr>
                <td>$gray-2</td>
                <td>rgb(244, 247, 248)</td>
                <td>Light Gray color for theming</td>
              </tr>
              <tr>
                <td>$gray-3</td>
                <td>rgb(108, 117, 125)</td>
                <td>Dark Gray color for theming</td>
              </tr>
              <tr>
                <td>$font-color</td>
                <td>rgb(44, 62, 80)</td>
                <td>Default font color for all elements</td>
              </tr>
              <tr>
                <td>$body-background</td>
                <td>$white</td>
                <td>Default background color for body element</td>
              </tr>
              <tr>
                <td>$flat-color-alpha</td>
                <td>0.15</td>
                <td>Defines the opacity for flat colors</td>
              </tr>
              <tr>
                <td>$scrollbar-color</td>
                <td>#808080</td>
                <td>Scrollbar color</td>
              </tr>
              <tr>
                <td>$sm</td>
                <td>576px</td>
                <td>Breakpoints for small devices</td>
              </tr>
              <tr>
                <td>$md</td>
                <td>768px</td>
                <td>Breakpoints for medium devices</td>
              </tr>
              <tr>
                <td>$lg</td>
                <td>992px</td>
                <td>Breakpoints for large devices</td>
              </tr>
              <tr>
                <td>$xl</td>
                <td>1200px</td>
                <td>Breakpoints for extra large devices</td>
              </tr>
              <tr>
                <td>$xxl</td>
                <td>1600px</td>
                <td>Breakpoints for extra extra large devices</td>
              </tr>
              <tr>
                <td>$breakpoints</td>
                <td>
                  ("sm": $sm, "md": $md, "lg": $lg, "xl": $xl, "xxl": $xxl)
                </td>
                <td>Breakpoints map for building classes</td>
              </tr>
              <tr>
                <td>$gutter-x</td>
                <td>24px</td>
                <td>Gutter for x axis</td>
              </tr>
              <tr>
                <td>$gutter-y</td>
                <td>0</td>
                <td>Gutter for y axis</td>
              </tr>
              <tr>
                <td>$sizes</td>
                <td>(0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100)</td>
                <td>Sizes map for padding and margin classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../layout/Layout.vue";
</script>
