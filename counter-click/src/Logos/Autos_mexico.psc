Algoritmo Autos_mexico
	Definir N, I, Color Como Entero;
	Definir Amarillo, Rosa, Roja, Verde, Azul Como Entero;
	Amarillo = 0; Rosa = 0; Roja = 0; Verde = 0; Azul = 0;
	
	Escribir ("Ingrese la cantidad de autos que entraran al pais.-");
	Leer N;
	
	Escribir ("Digitos finales en placa segun color de la calcomania del vehiculo");
	Escribir ("1 o 2 == Si el vehiculo es Amarillo");
	Escribir ("3 o 4 == Si el vehiculo es Rosa");
	Escribir ("5 o 6 == Si el vehiculo es Roja");
	Escribir ("7 o 8 == Si el vehiculo es Verde");
	Escribir ("9 o 0 == Si el vehiculo es Azul");
	
	
	
	Para I = 1  Hasta N Hacer
		Escribir ("*----------------------------------------------------*");
		Escribir ("Digite el Ultimo digito de la placa del vehiculo:  "), I;
		Leer Color;
		
		Si Color == 1  y Color == 2 Entonces
			Amarillo = Amarillo + 1;
		SiNo
			Si Color == 3  y Color == 4 Entonces
				Rosa = Rosa + 1;
			SiNo
				Si Color == 5 y Color == 6 Entonces
					Roja = Roja + 1;
				SiNo
					Si Color== 7 y Color == 8 Entonces
						Verde = Verde + 1;
					SiNo
						Si Color == 9 y Color== 0 Entonces
							Azul = Azul + 1;
						FinSi
					FinSi
				FinSi
			FinSi
			
		FinSi
	
	FinPara
	
	Escribir ("La cantidade vehiculos color amarillo son:"), Amarillo;
	Escribir ("La cantidade vehiculos color Rosa son:"), Rosa;
	Escribir ("La cantidade vehiculos color Rojo son:"), Roja;
	Escribir ("La cantidade vehiculos color Verde son:"), Verde;
	Escribir ("La cantidade vehiculos color Azul son:"), Azul;
FinAlgoritmo
