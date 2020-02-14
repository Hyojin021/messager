import * as tslib_1 from "tslib";
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
admin.initializeApp();
const db = admin.firestore();
/** listen for changes to messages collection and run cloud function
 * get message data, get last message's sender, use the sender id to pick out the recipient's id from
 * participantsId array property. get recipients device tokens
 * update notification payload with sender name
 * get recipient settings
 * for each token, if recipient has not turned off notifications, send notification to devices
 */
export const newMessageNotification = functions.firestore.document('messages/{messageId}').onUpdate((event) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const _data = event.after.data();
    const data = _data !== undefined ? _data : { messages: [] };
    /** get user of message so that */
    const userId = data.messages[data.messages.length - 1].uid;
    const _user = yield db.doc(`users/${userId}`).get();
    const _userData = _user.data();
    const user = _userData !== undefined ? _userData : { displayName: 'unknown' };
    /** get recipient of message so that */
    const recipientId = data.participantsId.find((id) => id !== userId);
    const _settings = yield db.doc(`preferences/${recipientId}`).get();
    const _settingsData = _settings.data();
    const settings = _settingsData !== undefined ? _settingsData : { messagePreview: true };
    // Notification content
    const payload = {
        notification: {
            title: 'New Message',
            body: `${user.displayName} sent you message!`,
            imageUrl: user.photoURL || ''
        }
    };
    // ref to the device collection for the user
    const devicesRef = db.collection('fcm-devices').where('uid', '==', recipientId);
    // get the user's tokens and send notifications
    const devices = yield devicesRef.get();
    const tokens = [];
    // send a notification to each device token
    devices.forEach((result) => {
        const token = result.data().token;
        tokens.push(token);
    });
    if (tokens.length && settings.messagePreview) {
        return admin.messaging().sendToDevice(tokens, payload);
    }
    return;
}));
//# sourceMappingURL=index.js.map