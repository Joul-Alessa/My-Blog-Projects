module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        connectionString: env('AZURE_STORAGE_CONNECTION_STRING'),
        account: env("STORAGE_ACCOUNT"),
        accountKey: env(""),//either account key or sas token is enough to make authentication 
        sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        defaultCacheControl: env("STORAGE_CACHE_CONTROL"), // optional
        baseUrl: env("AZURE_STORAGE_BASE_URL"),
        removeCN: env("REMOVE_CONTAINER_NAME") // optional, if you want to remove container name from the URL 
      }
    }
  }
});

// For using azure identities, the correct authType is 'msi' or (provide it in the environment variable)
/*
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: 'msi',
        account: env("STORAGE_ACCOUNT"),
        clientId: env("STORAGE_AZURE_CLIENT_ID"), // optional
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        defaultCacheControl: env("STORAGE_CACHE_CONTROL"), // optional
        removeCN: env("REMOVE_CONTAINER_NAME"), // optional, if you want to remove container name from the URL 
      },
    },
  },
});
*/