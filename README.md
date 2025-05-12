# YTNC - Youtube No Cookie

Permet d'**automatiquement** renvoyer vers une version **No Cookie** d'une vidéo Youtube sélectionné. _(Permet de ne plus avoir de Pub)_

---

## 🌐 Compatibilité des navigateurs

| Navigateur          | Supporté   |
| ------------------- | ---------- |
| **Google Chrome**   | ✅ Oui     |
| **Opera**           | ✅ Oui     |
| **Microsoft Edge**  | ✅ Oui     |
| **Brave / Vivaldi** | ✅ Oui     |
| **Firefox**         | ⚠️ Partiel |
| **Safari**          | ❌ Non     |

> ℹ️ Pour Firefox, la version stable n'est pas privilégiée. Elle arrivera sûrement avec en décalé de la version Chrome

---

## ♻️ Fonctionnalités

- **Redirection de Youtube vers une version **No Cookie** (Sans Pub)**
- **Possibilité de désactiver l'extension avec l'aide d'un simple bouton**
- **Statistiques d'Utilisation (Local)**
- **Copie du lien de la vidéo sous la forme Youtube Classique**

---

## 📦 Installation

### ✅ Prérequis

- Navigateur compatible : **Chrome, Chromium, Firefox**
- Extension téléchargée : soit **empaquetée (`.crx` / `.xpi`)**, soit sous forme de **dossier ou `.zip`**

---

### 🔧 Méthode 1 – Installation non empaquetée (version développeur)

#### 🧭 Pour **Chrome / Chromium**

1. Aller sur `chrome://extensions/`
2. Activer **Mode développeur** (coin supérieur droit)
3. Cliquer sur **"Charger l’extension non empaquetée"**
4. Sélectionner le dossier contenant `manifest.json`

### 🦊 Pour Firefox

1. Aller sur `about:debugging#/runtime/this-firefox`
2. Cliquer sur **"Charger un module complémentaire temporaire"**
3. Sélectionner le fichier `manifest.json` ou un `.zip` du dossier

> ⚠️ Cette méthode est temporaire : l’extension sera retirée au redémarrage de Firefox.  
> 🔧 Pour installer une extension non signée de manière plus durable, vous devez désactiver la vérification de signature :

- Aller dans `about:config`
- Rechercher `xpinstall.signatures.required`
- **Changer la valeur en `false`** (double-clic)

Ensuite, dans `about:debugging`, cliquez sur **"Charger un module complémentaire"** et sélectionnez le fichier `.xpi` de votre extension.

---

### 📦 Méthode 2 – Installation d’un fichier empaqueté

#### 🧭 Chrome / Chromium (`.crx`)

> Le fichier `.crx` est une archive empaquetée contenant l’extension.

1. Ouvrir `chrome://extensions/`
2. Activer **Mode développeur**
3. Glisser-déposer le fichier `.crx` dans la page

#### 🦊 Firefox (`.xpi`)

1. Aller sur `about:addons`
2. Cliquer sur la roue ⚙️ → **"Installer un module depuis un fichier…"**
3. Sélectionner le fichier `.xpi`

---

### 🗜️ Méthode 3 – Installation depuis un fichier `.zip`

#### Pour les développeurs ou testeurs

1. Télécharger le fichier `.zip`
2. Extraire le dossier sur votre machine
3. Suivre les étapes de la **Méthode 1 (non empaquetée)** ci-dessus

---

## ❓ Questions fréquentes

### Chrome bloque l'installation du `.crx` ?

- Chrome refuse souvent les `.crx` non signés.
- Solution : utiliser la **version non empaquetée**

---

## 📃 Licence

Ce projet est sous **licence GPLv3** - voir le fichier [LICENSE](LICENCE) pour plus de détails.

---

## ✨ À propos

Créé par **MasterAcnolo**. Fait avec le coeur dans l'objectif de ne plus perdre de temps avec des publicités inutile par moment. Avec utilisation de l'IA pour certaines parties du projet. En espérant qu'il vous sera utile 🫶.
