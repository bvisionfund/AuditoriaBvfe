// notificationConfig.js
import PushNotification from 'react-native-push-notification';

const configureNotificationChannel = () => {
  PushNotification.createChannel(
    {
      channelId: 'default-channel-id',
      channelName: 'Default Channel',
      channelDescription: 'A default channel',
      soundName: 'default',
      importance: 4, // IMPORTANCE_HIGH
      vibrate: true,
    },
    created =>
      console.log(
        `Channel created /SE HA CREADO EL CANAL: ${created} ${channelId}`,
      ),
  );
};

export default configureNotificationChannel;
