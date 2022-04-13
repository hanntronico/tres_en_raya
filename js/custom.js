			var casillas = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
			var jugadas_negras = [];
			var jugadas_rojas = [];
			var turno = true;
			var ganador_negras = false;
			var ganador_rojas = false;


			

			function guardar(argument) {
				localStorage.setItem('Nickname', $("#nickname").val());
				let str = localStorage.getItem('Nickname');
				console.log(str);
			}



			function mostrarFicha_roja(idColocada) {

				casillas.splice(casillas.indexOf(idColocada), 1);
				console.log(casillas);
				var nueva_casilla = casillas[Math.floor(Math.random() * casillas.length)];
				console.log(nueva_casilla);
		    setTimeout(function() { 
						$("#"+nueva_casilla).css({"background-image": "url('img/ficha_roja.png')", 
													 "background-repeat": "no-repeat",
													 "background-size": "95%",
													 "background-position": "center",
													 "height": "75%"
													});
						$("#pensando").empty();
						turno = true;
			     	return turno;
		    }, 2000);

		    casillas.splice(casillas.indexOf(nueva_casilla), 1);
		    turno = false;
				
				if (ganador_negras) {
					alert('ganamos');
					return false;
				}else{

		    	verifica3enraya('R', nueva_casilla);
				}
		    

			}



			function mostrarFicha_negra(id) {

				if ( turno ) {

								$("#"+id).css({"background-image": "url('img/ficha_negra.png')", 
															 "background-repeat": "no-repeat",
															 "background-size": "95%",
															 "background-position": "center",
															 "height": "75%"
															}); 
								
							esperarTurno();
							verifica3enraya('N', id);
							mostrarFicha_roja(id);



				}else{
					alert("Por favor, espere 2 segundos a que sea su turno");
				}



			}


			function esperarTurno() {

			    setTimeout(function() { 
			     $("#pensando").empty().html("<img src='img/InternetSlowdown_Day.gif' width='20%'>");

			    }, 2000);
			    
			}

			function verifica3enraya(equipo, id) {

				if(equipo=='N'){
					jugadas_negras.push(id);
				}else if (equipo=='R') {
					jugadas_rojas.push(id);
				}

				console.log("jugadas negras: " + jugadas_negras);
				console.log("jugadas rojas: " + jugadas_rojas);

				// console.log(jugadas_negras.indexOf('c1'));
				// console.log(jugadas_negras.includes('a1'));

				if(jugadas_negras.includes('a1') && jugadas_negras.includes('a2') && jugadas_negras.includes('a3')){
						
						// console.log('3 EN RAYA NEGRAS');
						// alert('3 EN RAYA NEGRAS');
						ganador_negras = true;


				}else if(jugadas_rojas.includes('a1') && jugadas_rojas.includes('a2') && jugadas_rojas.includes('a3')){
					// console.log('3 EN RAYA NEGRAS');
					// alert('3 EN RAYA NEGRAS');
					ganador_rojas = true;

				}else if(jugadas_negras.includes('b1') && jugadas_negras.includes('b2') && jugadas_negras.includes('b3')){
					console.log('3 EN RAYA NEGRAS');
					alert('3 EN RAYA NEGRAS');
					ganador_negras = true;
				}
		
			}