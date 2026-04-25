<!-- l10n-sync: source-file="workshop/04-multi-agent.md" -->
# Parte 4: Desarrollo Multi-Agente

[← Parte 3](03-quiz-master.md)

---

## Tarea 1: Agent Hooks — Puerta de Pruebas

[Agent hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) ejecutan comandos shell en puntos clave del ciclo de vida durante sesiones de agente. Vamos a agregar un **Stop hook** con alcance de workspace que bloquea *todos* los agentes — ningún agente puede finalizar hasta que todas las pruebas pasen.

**Pasos:**

1. Abre la carpeta `.github/hooks/`
2. Prompt: *Agrega un agent hook que ejecute las pruebas y bloquee al agente de finalizar si alguna prueba falla*
3. El hook debe ser un archivo JSON en `.github/hooks/` (ej: `stop-test-gate.json`), no dentro de ningún archivo de agente individual.

✅ **Resultado:** Cada agente ahora tiene una red de seguridad — seguirá trabajando hasta que todas las pruebas pasen antes de devolver el control.

---

## Tarea 2: Nuevo Patrón de Bingo (Orientado por TDD)

Usa el agente TDD para agregar un patrón de bingo "Four Corners". El stop hook del workspace que configuraste garantizará la disciplina de pruebas — cada agente debe dejar las pruebas pasando antes de devolver el control.

**Pasos:**

1. Nuevo chat con agente: `TDD`
2. *Agrega un patrón de victoria "Four Corners" en bingo — los cuatro cuadrados de las esquinas (superior-izquierda, superior-derecha, inferior-izquierda, inferior-derecha) deben estar marcados*
3. Observa cómo TDD orquesta:
   - **TDD Red** escribe pruebas que fallan para la detección de Four Corners
   - Revisa las nuevas pruebas en el test runner de VS Code
   - **TDD Green** implementa el código mínimo para pasar — el stop hook se activa, continúa si las pruebas fallan
   - **TDD Refactor** limpia la implementación
   - Haz clic en cualquier sub-agente mientras se ejecuta para ver su contexto e instrucciones
4. Revisa el resumen de cambios

✅ **Resultado:** Ciclo TDD orquestado con puerta de pruebas automática — sin handoffs manuales entre agentes.

---

## Tarea 3: Verifica con Agent Debug Logs

Inspecciona lo que pasó bajo el capó — ¿se activó el hook? ¿Cómo se comunicaron los agentes?

**Pasos:**

1. Verifica que el hook cargue: abre el canal de salida **GitHub Copilot Chat Hooks** (panel Output → dropdown de canal)
2. Abre Agent Debug Logs: ícono de engranaje (⚙️) en la vista de Chat → **Show Agent Debug Logs**
3. **Pestaña Logs:** filtra por eventos de ejecución del hook durante el ciclo TDD
4. **Agent Flow Chart:** visualiza la orquestación TDD → Red → Green → Refactor
5. **Pestaña Summary:** revisa el total de llamadas de herramienta y uso de tokens

**Bonus:** Haz clic en el ícono ✨ sparkle para adjuntar eventos de debug a un nuevo chat, luego pregunta: `/troubleshoot ¿se activó el Stop hook durante el ciclo TDD?`

✅ **Resultado:** Observabilidad completa de la orquestación multi-agente y ejecución de hooks.

---

## Tarea 4: Card Deck Shuffle (Orientado por Diseño)

Divide los flujos de trabajo de agentes en áreas de enfoque específicas, como design-first.

**Pasos:**

1. Nuevo chat con agente: `Pixel Jam`
2. *Nuevo modo: Card Deck Shuffle. Cada jugador abre el juego → toca → recibe una carta aleatoria con una pregunta.*
3. El agente itera en la UI
4. Da follow-up para que funcione como quieres:
   - *Agrega izquierda/derecha (fallo, éxito)*
   - *Saca una carta justo cuando lo abra*
5. Commit

---

## Tarea 5: Agente de Revisión de UX

Combina MCP, flujos de trabajo personalizados y aislamiento de sub-agentes en un agente para flujos de trabajo poderosos. Enfócate en diferentes aspectos, como usabilidad, a11y, cumplimiento.

**Pasos:**

1. Nuevo chat con agente: `Pixel Jam`: *Ejecuta la revisión*
2. Mantén la app abierta en la vista previa del navegador de VS Code mientras la revisión se ejecuta
3. Sigue el proceso mientras revisa
   - Aparte: Abre `.github/agents/pixel-jam.agent.md` para revisar el prompt
4. Contempla una revisión profunda y detallada

**Bonus:**
- Registra hallazgos como issues en GitHub para después
- Asigna issues críticas al agente de código para corregir

---

## Bonus: Sigue Explorando

- Corrige problemas de la revisión de UX, delegados a agente en background o cloud
- Agrega la posibilidad de tener múltiples temas de preguntas para elegir
- Agrega compartir en redes sociales en el estado de victoria
- ¿Haz una app real para iOS o full-stack?

---

## ✅ ¡Parte 4 Completa!

Aprendiste cómo:
- Agregar agent hooks con alcance de workspace para imponer puertas de calidad (Stop hook en todos los agentes)
- Usar TDD para orquestar Red → Green → Refactor automáticamente
- Inspeccionar comportamiento del agente con Agent Debug Logs y Flow Charts
- Usar agentes design-first para desarrollo orientado por UI
- Ejecutar agentes de revisión de UX para pruebas integrales
- Combinar múltiples tipos de agentes para flujos de trabajo complejos

### Sigue Explorando

- 📺 [VS Code on YouTube](https://www.youtube.com/code)
- 📖 [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- 🌟 [Awesome Copilot](https://github.com/github/awesome-copilot)
