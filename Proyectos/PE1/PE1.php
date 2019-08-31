<div class="tab-pane fade" id="JuegoVolado" role="tabpanel">
	<div class="card">
		<div class="card-body">
			<ul class="nav md-pills nav-justified rounded-lg mb-0 border border-dark elegant-color pills-warning">
				<li class="nav-item">
					<a class="nav-link active" data-toggle="tab" href="#PE1VG" role="tab"><i class="fas fa-binoculars"></i> Visión General</a>
				</li>
				<li>
					<a class="nav-link" data-toggle="tab" href="#PE1P" role="tab"><i class="fas fa-question-circle"></i> Problemática</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#PE1C" role="tab"><i class="fas fa-list-alt"></i> Características</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#PE1DT" role="tab"><i class="fas fa-clipboard-list"></i> Detalles Técnicos</a>
				</li>
			</ul>
			<div class="tab-content pt-3">
				<div class="tab-pane fade in show active" id="PE1VG" role="tabpanel">
					<div class="card white text-dark">
						<div class="card-body">
							<div class="row">
								<div class="col-md-8">
									<b>¿Qué es?</b>
									<br><p class="mb-0">Programa que obtiene la probabilidad de ganar en un juego de azar de lanzamiento de moneda</p>
									<br><b>Objetivo</b>
									<br><p class="mb-0">Entender el funcionamiento y probabilidad de ganar en juego de azar con determinadas reglas en n iteraciones</p>
								</div>
								<div class="col-md-4">
									<div class="mdb-lightbox no-margin">
										<figure class="col">
											<a href="Proyectos/PE1/Images/Interfaz.jpg" data-size="1765x1141">
												<img src="Proyectos/PE1/Images/Interfaz.jpg" class="img-fluid" style="width:246px; height:186px;">
											</a>
											<figcaption>
												<b>Interfaz principal de la aplicación <i class="fas fa-desktop"></i> <i class="fas fa-mobile"></i></b>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="PE1P" role="tabpanel">
					<div class="card white text-dark">
						<div class="card-body">
							<div class="row">
								<div class="col">
									<b>Problemática</b>
									<div class="table-responsive text-nowrap">
										<table class="table table-sm m-0">
											<tbody>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Se propone el juego de lanzar una moneda al aire que tiene las siguientes reglas:</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0">El jugador comienza con 30 pesos y apuesta $10 en la ronda inicial.</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0">Si el jugador pierde, apostará el doble para recuperar lo perdido
													siempre y cuando tenga el dinero suficiente.</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0">Si el jugador gana, apostará $10.</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0">El juego termina cuando el jugador pierde (se queda sin dinero) o gane(llegue a $50).</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="PE1C" role="tabpanel">
					<div class="card white text-dark">
						<div class="card-body">
							<div class="row">
								<div class="col">
									<b>La simulación incluye:</b>
									<ul>
										<li>Tabla con especificaciones del juego:
											<div class="table-responsive text-nowrap">
												<table class="table table-sm">
													<tbody>
														<tr>
															<td class="p-0"><p class="mt-1 mb-0">Número de iteración</td>
															<td class="p-0"><p class="mt-1 mb-0">Resultado del lanzamiento</td>
														</tr>
														<tr>
															<td class="p-0"><p class="mt-1 mb-0">Cantidad antes del volado</td>
															<td class="p-0"><p class="mt-1 mb-0">Cantidad después del volado</td>
														</tr>
														<tr>
															<td class="p-0"><p class="mt-1 mb-0">Cantidad a apostar</td>
															<td class="p-0"><p class="mt-1 mb-0">Se ganó el juego?</td>
														</tr>
														<tr>
															<td class="p-0"><p class="mt-1 mb-0">Número aleatorio del volado</td>
														</tr>
													</tbody>
												</table>
											</div>
										</li>
										<li>Probabilidad de ganar dependiendo del número de iteraciones.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="PE1DT" role="tabpanel">
					<div class="card white text-dark">
						<div class="card-body">
							<div class="row">
								<div class="col">
									<div class="table-responsive text-nowrap">
										<table class="table table-sm table-bordered m-0">
											<tbody>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Tecnologías</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>VBA Excel</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Librerías adicionales</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>S/L</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Plataforma</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>Escritorio y móvil</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Sistema Operativo</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>Cualquiera</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">Memoria en disco requerida</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>31 KB</td>
												</tr>
												<tr>
													<td class="p-0"><p class="mt-1 mb-0 font-weight-bold">RAM requerida</p></td>
													<td class="p-0"><p class="mt-1 mb-0"></p>Depende del número de iteraciones</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>