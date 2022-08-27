<template>
	<b-container>
		<b-row>
			<b-colxx xxs="12" offset-xxs="0" lg="8" offset-lg="2" class="text-center">
				<h1>{{title}}</h1>
				<p>{{detail}}</p>
			</b-colxx>
		</b-row>
		<b-row class="row-eq-height price-container mt-5">
			<b-colxx md="12" lg="6" class="mb-4 price-item" v-for="(pack,index) in data.packages" :key="index">
				<b-card no-body>
					<b-card-body class="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
						<div class="price-top-part">
							<i :class="`${pack.icon} large-icon`"></i>
							<h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">{{pack.title}}</h5>
							<p class="text-large mb-2 text-default font-weight-bold text-primary">{{pack.price}}</p>
							<p class="text-muted text-small">{{pack.detail}}</p>
						</div>
						<div class="text-center pl-4 pr-4 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
							<div class="d-sm-none d-lg-block">
								<br>
							</div>
							<ul class="list">
								<li v-for="(feature,i) in data.features" :key="i">
									<p class="mb-0" v-if="pack.features[i]">{{feature}}</p>
								</li>
							</ul>
							<br class="d-sm-none d-md-block">
							<div>
							</div>
							<div>
								<br>
								<p>Érdekel írj nekünk a chaten</p>
							</div>
						</div>
					</b-card-body>
				</b-card>
			</b-colxx>
		</b-row>
	</b-container>
</template>

<script>
export default {
  props: ['title', 'detail', 'data', 'buttonText'],
};
</script>

<style scoped>
.list p {
  text-align: left;
}
</style>
