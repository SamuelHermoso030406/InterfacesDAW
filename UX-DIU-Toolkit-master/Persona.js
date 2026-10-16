/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Jose Carlos",
				Photo: "JoseCarlos.png",
				Quote: "Vive y deja vivir",
				Age: 24,
				Occupation: "Programador Web",
				Family: "Con pareja desde hace 1 año",
				Location: "Granada (Huetor Vega)",
				Character: "Le gusta disfrutar del tiempo",
				PersonalityTraits: [
					{ Name: "Introv/reservado Vs Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico Vs  Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Cambiar a un trabajo más estable", "Mudarse a su propio piso"],
				Frustrations: ["Le gusta la tecnología, pero siempre 'llama a un amigo' para resolver problemas", "Le gustaría tener más tiempo libre y asi poder jugar mas a sus videojuegos favoritos"],
				Bio: "Es de Santa Fe y vino a Granada para estudiar DAW, pero no ha tenido grandes oportunidades de trabajo. LLeva 2 años contratado en la empresa actual. Aqui ha hecho buenos amigo en el trabajo y normalmente ser reunen para fiestas y a veces organizan viajes",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "DAW", Value: 4 },
					{ Name: "Programación", Value: 3 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "LLeva un tiempo preocupado debido a que quiere comprarse un nuevo ordenador y esta bastante indeciso con que elegir",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Maria Esteban",
				Photo: "MariaEsteban.webp",
				Quote: "Tu casa es my casa",
				Age: 32,
				Occupation: "Compradora y vendedora de propiedades",
				Family: "Solo tiene a su madre y a u hermana.",
				Location: "Granada (Zaidin)",
				Character: "Encantador y sociable.",
				PersonalityTraits: [
					{ Name: "Introv/reservada Vs Extrov/activa ", Value: 3 },
					{ Name: "Realista/práctica Vs Intuición/imaginativa", Value: 3 },
					{ Name: "Racional/analitica Vs Emocional/impulsiva", Value: 2 },
					{ Name: "Flemática/apática Vs Colérica/visceral", Value: 2 }
				], 
				Goals: ["Automatizar la compra y venta y que ella solo dirija.", "Ser millonaria.", "Conseguir un contrato con alguna empresa para que le salga mas rentable."],
				Frustrations: ["Siempre ha de comprar muebles en distintos sitios por lo que tiene que moverse mucho.", "Ha de mirar diversas paginas para comparar y encontrar el mejor precio.", "Necesita buscar siempre ayuda a algun amigo."],
				Bio: "Es una mujer que lleva desde los 18 intentando montar su imperio mobilístico comprando viejas casas, remodelandolas y mas adelante venderlas por un precio mayor.",
				Tech: [
					{ Name: "Sociable", Value: 5 },
					{ Name: "Telecomunicacion", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Compras Online", Value: 5 }
					
				], 
                Contextos:   "Lleva un tiempo preocupada porque pierde demasiado tiempo buscando productos para la remodelacion que buscando casas." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])