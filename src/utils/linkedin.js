export function generateLinkedInText(proof, language = "es") {
    if (language === "en") {
      return `
  Today I want to share a small win from one of my projects 👇
  
  🔹 ${proof.title}
  
  ${proof.description}
  
  💡 What did I learn?
  ${proof.learning}
  
  Technologies used:
  ${proof.tech.join(", ")}
  
  #webdevelopment #learning #javascript
  `.trim();
    }
  
    // Español por defecto
    return `
  Hoy quiero compartir un avance en uno de mis proyectos 👇
  
  🔹 ${proof.title}
  
  ${proof.description}
  
  💡 ¿Qué aprendí?
  ${proof.learning}
  
  Tecnologías utilizadas:
  ${proof.tech.join(", ")}
  
  #desarrollo #programación #aprendizaje
  `.trim();
  }
  