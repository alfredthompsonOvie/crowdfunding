<template>
	<section class="about">
		<!--  -->
		<section class="about__card">
			<h1>Challenge Accepted</h1>
			<p>
				Hi i am <span class="name">Alfred thompson ovie</span> and this is my
				solution to frontend mentors challenge
			</p>
		</section>
	</section>

  <!-- <div class="pledge__card" @click.prevent="">
					<div class="pledge__card--content">
						<div class="checkbtn">
							<button class="btn selectBtn">
								<span class="span"></span>
							</button>
						</div>
						<header class="card__header card__header--pledge-subHeading">
							<div class="title">
								<h2 class="subHeading">Pledge with no reward</h2>
							</div>
						</header>
						<p class="text">
							Choose to support us without a reward if you simply believe in our
							project. As a backer, you will be signed up to receive product
							updates via email.
						</p>
					</div>
				</div> -->
				<!--  -->
				<!-- <div class="pledge__card" @click.prevent="">
					<div class="pledge__card--content">
						<div class="checkbtn">
							<button class="btn selectBtn">
								<span class="span"></span>
							</button>
						</div>
						<header class="card__header card__header--pledge-subHeading">
							<div class="title">
								<h2 class="subHeading">Bamboo Stand</h2>
								<h2 class="subHeading subHeading-pledge">Pledge $25 or more</h2>
							</div>
						</header>
						<p class="text">
							You get an ergonomic stand made of natural bamboo. You've helped
							us launch our promotional campaign, and you’ll be added to a
							special Backer member list.
						</p>
						<div class="card__footer">
							<div class="inStock">
								<span class="figure">101</span>
								<span class="text">left</span>
							</div>
						</div>
					</div>
					
					<form class="pledge__form" v-if="modalStore.showForm">
						<p class="text">Enter your pledge</p>
						<div class="form__group">
							<label for="amount">
								<input
									type="number"
									name="amount"
									id="amount"
									placeholder="25"
									class="form__control"
								/>
								<small class="currency">$</small>
							</label>
							<input type="submit" value="Continue" class="form__control cta" />
						</div>
					</form>
					
				</div> -->
				<!--  -->
				<!-- <div class="pledge__card" @click.prevent="">
					<div class="pledge__card--content">
						<div class="checkbtn">
							<button class="btn selectBtn">
								<span class="span"></span>
							</button>

							<label for="radio"></label>
							<input type="radio" name="radio" id="radio">
						</div>
						<header class="card__header card__header--pledge-subHeading">
							<div class="title">
								<h2 class="subHeading">Black Edition Stand</h2>
								<h2 class="subHeading subHeading-pledge">Pledge $75 or more</h2>
							</div>
						</header>
						<p class="text">
							You get a Black Special Edition computer stand and a personal
							thank you. You’ll be added to our Backer member list. Shipping is
							included.
						</p>
						<div class="card__footer">
							<div class="inStock">
								<span class="figure">64</span>
								<span class="text">left</span>
							</div>
						</div>
					</div>
					
					<form class="pledge__form" v-if="modalStore.showForm">
						<p class="text">Enter your pledge</p>
						<div class="form__group">
							<label for="amount">
								<input
									type="number"
									name="amount"
									id="amount"
									placeholder="75"
									class="form__control"
								/>
								<small class="currency">$</small>
							</label>
							<input type="submit" value="Continue" class="form__control cta" />
						</div>
					</form>
					
				</div> -->
				<!--  -->
				<!-- <div class="pledge__card" @click.prevent="">
					<div class="pledge__card--content">
						<div class="checkbtn">
							<button class="btn selectBtn">
								<span class="span"></span>
							</button>
						</div>
						<header class="card__header card__header--pledge-subHeading">
							<div class="title">
								<h2 class="subHeading">Mahogany Special Edition</h2>
								<h2 class="subHeading subHeading-pledge">
									Pledge $200 or more
								</h2>
							</div>
						</header>
						<p class="text">
							You get two Special Edition Mahogany stands, a Backer T-Shirt, and
							a personal thank you. You’ll be added to our Backer member list.
							Shipping is included.
						</p>
						<div class="card__footer">
							<div class="inStock">
								<span class="figure">0</span>
								<span class="text">left</span>
							</div>
						</div>
					</div>
					
					<form class="pledge__form" v-if="modalStore.showForm">
						<p class="text">Enter your pledge</p>
						<div class="form__group">
							<label for="amount">
								<input
									type="number"
									name="amount"
									id="amount"
									placeholder="200"
									class="form__control"
								/>
								<small class="currency">$</small>
							</label>
							<input type="submit" value="Continue" class="form__control cta" />
						</div>
					</form>
					
				</div> -->
				<!--  -->

				<!--  -->
</template>

<style>
.about {
	grid-column: 2;

	min-height: 100vh;
	display: flex;
	text-align: center;
	/* align-items: center; */
}
.about__card {
	max-width: 400px;
	margin-inline: auto;
}
</style>
