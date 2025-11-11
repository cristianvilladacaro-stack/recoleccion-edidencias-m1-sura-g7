let continuar = true;

while (continuar) {
  console.log("\n=== URNA DIGITAL ===");
  console.log("1. Votar por Candidato A");
  console.log("2. Votar por Candidato B");
  console.log("3. Votar en Blanco");
  console.log("4. Consultar Resultados Parciales");
  console.log("5. Salir");

  let opcion = parseInt(prompt("Seleccione una opción (1-5):"));

  if (opcion === 1) {
    console.log("Voto registrado para Candidato A.");
  } else if (opcion === 2) {
    console.log("Voto registrado para Candidato B.");
  } else if (opcion === 3) {
    console.log("Voto en blanco registrado.");
  } else if (opcion === 4) {
    console.log("Mostrando resultados parciales...");
  } else if (opcion === 5) {
    console.log("Gracias por usar la urna digital.");
    break;
  } else {
    console.log("Opción inválida.");
  }

  let respuesta = prompt("¿Desea realizar otra acción? (s/n): ");
  if (respuesta.toLowerCase() !== "s") {
    continuar = false;
    console.log("Programa finalizado.");
  }
}
