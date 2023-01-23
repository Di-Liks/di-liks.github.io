<template>
	<div>
		<div class="tariffs">
			<h2>
				Тарифы
			</h2>

			<div class="rectangle-container">
				<div class="rectangle">

					<div class="rectangle-header">
						<div class="orange-header">
							Стартовый
						</div>
						<div class="money-text">
							2000
							<img class="ruble-picture" :src='require("@/assets/Tariffs-ruble.svg")' />
						</div>
						<div class="under-money-text">
							В час
						</div>
					</div>
					<hr />
					<ul class="list">
						<li class="list-element">
							Предоплата от 2 часов
						</li>
						<li class="list-element">
							Консультации и работы по SEO
						</li>
						<li class="list-element">
							Услуги дизайнера
						</li>
						<li class="list-element">
							Стандартное время реакции
						</li>
						<li class="list-element">
							Неиспользованные оплаченные часы переносятся на следующий месяц
						</li>
					</ul>

					<div class="button">
						Оставить заявку!
					</div>


				</div>
				<div class="rectangle">

					<div class="rectangle-header">
						<div class="orange-header">
							Бизнес
						</div>
						<div class="money-text">
							2000
							<img class="ruble-picture" :src='require("@/assets/Tariffs-ruble.svg")' />
						</div>
						<div class="under-money-text">
							В час
						</div>
					</div>
					<hr />
					<ul class="list">
						<li class="list-element">
							Предоплата от 10 часов
						</li>
						<li class="list-element">
							Консультации и работы по SEO
						</li>
						<li class="list-element">
							Услуги дизайнера
						</li>
						<li class="list-element">
							Высокое время реакции – до 2 рабочих дней
						</li>
						<li class="list-element">
							Неиспользованные часы не переносятся
						</li>
					</ul>

					<div class="button">
						Оставить заявку!
					</div>
				</div>
				<div class="rectangle">

					<div class="rectangle-header">
						<div class="orange-header">
							VIP
						</div>
						<div class="money-text">
							1800
							<img class="ruble-picture" :src='require("@/assets/Tariffs-ruble.svg")' />
						</div>
						<div class="under-money-text">
							В час
						</div>
					</div>
					<hr />
					<ul class="list">
						<li class="list-element">
							Предоплата от 100 часов
						</li>
						<li class="list-element">
							Консультации и работы по SEO
						</li>
						<li class="list-element">
							Услуги дизайнера
						</li>
						<li class="list-element">
							Максимальное время реакции – в день обращения
						</li>
						<li class="list-element">
							Неиспользованные часы не переносятся
						</li>
					</ul>

					<div class="button">
						Оставить заявку!
					</div>
				</div>
			</div>
		</div>
		<div id="text-f1">Вам не подходят наши тарифы? Оставьте заявку и мы<br>предложим вам индивидуальные условия!</div>
		<div id="text-f2">Получить индивидуальный тариф</div>
  </div>
</template>

<script>
export default {
  name: 'BodyTariffs',
  components: {
      
  }
}
</script>

<style scoped>
/* Для заголовка сделать класс на всё приложение*/
.tariffs {
  position: absolute;
  top: 3004px;
	width: 1440px;
	height: 2043px;
}

h2 {
	margin-top: 160px;
	font-weight: 700;
	font-size: 42px;
	line-height: 51px;
	color: #000000;
}

.rectangle-container {
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
}

.rectangle {
	width: 270px;
	height: 483px;
	padding-left: 60px;
	padding-right: 60px;
	padding-top: 78px;
	padding-bottom: 48px;
	margin-left: 25px;
	margin-right: 25px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 5px;
}

.rectangle-header {
	text-align: left;
}

.orange-header {
	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 27px;
	text-align: left;
	color: #F14D34;
}

.money-text {
	color: #050C33;
	font-style: normal;
	font-weight: 700;
	font-size: 72px;
	line-height: 72px;
	text-transform: uppercase;
	display: inline;
}

.ruble-picture {
	position: relative;
	top: -30px;
}

.under-money-text {
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #050C33;
	text-align: left;
	text-transform: uppercase;
}

.list {
	padding-left: 20px;
	text-align: left;
}

.list>li {
	list-style-image: url("@/assets/Tariffs-checkmark.svg");
	padding-inline-start: 18px;
	margin-top: 20px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #050C33;
	opacity: 0.7;
}

.list-element:first-of-type {
	margin-top: 35px;
}

.button {
	width: 260px;
	height: 60px;
	box-sizing: border-box;
	opacity: 0.4;
	border: 1px solid #F14D34;
	border-radius: 5px;
	margin-top: 43px;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	/* identical to box height, or 100% */

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	justify-content: center;

	color: #F14D34;
}

hr {
	margin-top: 20px;
	opacity: 0.7;
}

#text-f1{
	position: absolute;
	width: 468px;
	height: 44px;
	left: 486px;
	top: 3971px;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
}
#text-f2{
	position: absolute;
	width: 279px;
	height: 12px;
	left: 581px;
	top: 4041px;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;

	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.06em;
	text-decoration-line: underline;
	text-transform: uppercase;
}

</style>