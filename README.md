# Tienda segura

Aplicación mínima en Express para el taller **Tu primer pipeline seguro** de Ingeniería de Software Aplicada. Calcula el importe de una compra y permite demostrar controles de calidad y seguridad en GitHub Actions.

## Uso local

Requiere Node.js 20 o superior y npm.

```sh
npm ci
npm test
```


La aplicación escucha en `http://localhost:3000`. La petición `GET /total?p=100&c=2` devuelve `{"total":200}`.
`app.js` exporta la aplicación y la función `total(precio, cant, desc)`. El test usa `node:test` y `node:assert/strict`.

## Controles de Seguridad e Integración Continua (CI/CD)


El pipeline implementado en `.github/workflows/pipeline.yml` incluye las siguientes puertas de validación en cada Pull Request:
| Control | Herramienta | Qué detecta / Verifica |
| --- | --- | --- |
| `npm test` | Node.js Test Runner | Regresiones lógicas en el cálculo del descuento. |
| `npm audit` | SCA (Software Composition Analysis) | Vulnerabilidades conocidas (CVE) en dependencias. |
| `semgrep` | SAST (Static Application Security Testing) | Patrones de código inseguro (como inyecciones o uso de `eval`). |
| `gitleaks` | Detección de Secretos | Filtración de credenciales, tokens o claves en el código y el historial. |
| `trivy` | Escaneo de Contenedores | Vulnerabilidades y configuraciones inseguras en el `Dockerfile` (ej: usuario root). |
| `OWASP ZAP` | DAST (Dynamic Application Security Testing) | Análisis de seguridad dinámico sobre la aplicación corriendo en tiempo de ejecución. |


## Retos Extra Implementados


* **Reto 1:** Protección de rama en `main` exigiendo que el pipeline pase antes de fusionar.
* **Reto 2:** Contenedor seguro con `Dockerfile` usando `USER node`.
* **Reto 3:** Pruebas DAST integradas con OWASP ZAP.