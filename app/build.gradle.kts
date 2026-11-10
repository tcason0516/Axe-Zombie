plugins {
    id("com.android.application")
}

android {
    namespace = "com.axezombie.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.axezombie.game"
        minSdk = 26
        targetSdk = 35
        versionCode = (System.getenv("GITHUB_RUN_NUMBER") ?: "1").toInt()
        versionName = "1.0." + (System.getenv("GITHUB_RUN_NUMBER") ?: "0")
    }

    signingConfigs {
        create("release") {
            // A fixed keystore so every build can install over the previous one.
            storeFile = file("axezombie.keystore")
            storePassword = "axezombie"
            keyAlias = "axezombie"
            keyPassword = "axezombie"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("release")
        }
        debug {
            signingConfig = signingConfigs.getByName("release")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    // keep the JS bundle uncompressed for fast loading
    androidResources {
        noCompress += listOf("js", "html")
    }
}
