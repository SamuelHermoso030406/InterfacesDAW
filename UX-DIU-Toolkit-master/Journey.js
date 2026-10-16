/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jose Carlos",
                Photo: "JoseCarlos.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere emanciparse y vivir de su trabajo",
                touch1: "agenda",
                feel1: "4",
                con1: "Esta pendiente si conseguira un trabajo mejor",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas de productos que pueda necesitar para su casa",
                touch2: "Movil",
                feel2: "2",
                con2: "Hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar una buena pagina fiable antes de ponerse a buscar los producots en si",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por la compatibilidad de los componentes",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan algo ue este ya premontado",
                touch4: "ordenador",
                feel4: "4",
                con4: "El quiere realizar el trabajo con sus propias manos",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra con mi pagina web y le encanta todo",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "No tiene dinero para comprar el pc que el quiere",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ahorra durante un tiempo hasta que consigue comprar el ordenador de sus sueños",
                touch6: "ordenador",
                feel6: "3",
                con6: "Se ha quedado endeudado",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Maria Esteban",
                Photo: "MariaEsteban.webp",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere montar su propio monopolio de propiedades",
                touch1: "agenda",
                feel1: "5",
                con1: "No tiene suficiente inventario para lograr eso",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide empezar a buscar por sitios web para buscar un provededor",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Hay tantas opciones diferentes con pros y contras que no sabe que hacer",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Despues de tanto mirar no encuentra nada ideal y se da por vencida",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Empieza a preguntar a amigos para ver si alguno conoce algo sobre alguna pagina web",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "Ninguno esta en su misma tesitura por lo que no conocen nada",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empieza a abrir horizontes y preguntar a empresarios a ver si saben algo",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "No conoce a ningun empresario exitosso",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra mi aplicacion la cual tiene todo lo que ella desea para poder montar su negocio",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Le falta patrimonio para comprar todo lo que quiere asi que comienza desde el principio",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



