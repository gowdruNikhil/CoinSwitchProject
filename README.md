Install the dependencies 

    ```bash
    npm install && ( cd ios && pod install )
    ```

### For Android

Run the following command while the emulator is open or a device is connected via adb.

``` 
npx react-native run-android
```

### For iOS

Run the following commands to install pods and run the app on iPhone simulator

``` 
cd ios && pod install && cd ..
npx react-native run-ios
```