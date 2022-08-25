<template>
    <b-container>
        <b-row>
            <b-colxx xxs="12" lg="8" offset-xxs="0" offset-lg="2" class="text-center">
                <h1>{{title}}</h1>

            </b-colxx>

            <b-colxx xxs="12" offset-xxs="0" class="text-center">

                    <div class="border">
                        <b-button v-b-toggle.collapseAccordion1 variant="link" block class="text-left fontSize1rem">Mit jelent a közösségi (co-working) iroda?</b-button>
                        <b-collapse id="collapseAccordion1" accordion="my-accordion">
                            <div class="p-4">
                                Elsősorban fejlődést, tanulást, ötleteket, találkozásokat, élményeket. A közösségi (co-work) iroda az a hely, ahol a kisvállalkozók önállóan, de egymást támogatva és segítve dolgoznak.
                            </div>
                        </b-collapse>
                    </div>
                    <div class="border">
                        <b-button v-b-toggle.collapseAccordion2 variant="link" block class="text-left fontSize1rem">Collapsible Group Item #2</b-button>
                        <b-collapse id="collapseAccordion2" accordion="my-accordion">
                            <div class="p-4">
                            2. Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them
                                accusamus labore sustainable VHS.
                            </div>
                        </b-collapse>
                    </div>
                    <div class="border">
                        <b-button v-b-toggle.collapseAccordion3 variant="link" block class="text-left fontSize1rem">Collapsible Group Item #3</b-button>
                        <b-collapse id="collapseAccordion3" accordion="my-accordion">
                            <div class="p-4">
                                3. Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                                lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them
                                accusamus labore sustainable VHS.
                            </div>
                        </b-collapse>
                    </div>

            </b-colxx>
        </b-row>
    </b-container>
</template>

<script>
export default {
  props: ['title'],
};
</script>
