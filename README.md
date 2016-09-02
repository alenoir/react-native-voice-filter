# react-native-voice-filter

React Native module for record and playing sound in realtime

## Installation

### Installation on Android

Edit `android/settings.gradle` to declare the project directory:
```
include ':RNVoiceFilter', ':app'
project(':RNVoiceFilter').projectDir = new File(rootProject.projectDir, '../path/to/react-native-voice-filter/android')
```

Edit `android/app/build.gradle` to declare the project dependency:
```
dependencies {
  ...
  compile project(':react-native-voice-filter')
}
```

Edit `android/app/src/main/java/.../MainActivity.java` to register the native module:

```java
...
import com.boilerplate.RNVoiceFilter.RNVoiceFilterPackage; // <-- New
...

public class MainActivity extends ReactActivity {
  ...
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new RNVoiceFilterPackage() // <-- New
    );
  }
```

For older `MainActivity.java` templates, edit as follows:

```java
...
import com.boilerplate.RNVoiceFilter.RNVoiceFilterPackage; // <-- New
...

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ...
    @Override
  protected void onCreate(Bundle savedInstanceState){
    ...
    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      ...
      .addPackage(new MainReactPackage())
      .addPackage(new RNVoiceFilterPackage()) // <-- New
      ...
  }
```

## Basic usage

```js
// Import the react-native-boilerplate-bridge module
var RNVoiceFilter = require('../lib/react-native-voice-filter');

// init
var voiceFilter = new RNVoiceFilter();

// Callback

voiceFilter.listen();
voiceFilter.setVolume(0.5);
voiceFilter.stop();
```
