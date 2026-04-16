      env:
-         BASE_URL: ${{ github.event.deployment_status.environment_url }}
+         BASE_URL: ${{ github.event.client_payload.url }}