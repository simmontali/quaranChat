import React from "react";
//import "../App.css";

// React Chat Elements
import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";

class AccountList extends React.Component {
  render() {
    var chatDataSource = [];
    for (var chat in this.props.chats) {
      const messageLength = this.props.chats[chat].messages.length;
      const date =
        messageLength > 0
          ? this.props.chats[chat].messages[messageLength - 1].date
          : new Date();
      const subtitle =
        messageLength > 0
          ? this.props.chats[chat].messages[messageLength - 1].text
          : "";
      if (this.props.chats.hasOwnProperty(chat)) {
        chatDataSource.push({
          avatar:
            "https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png",
          peerID: chat,
          alt: "Reactjs",
          title: this.props.chats[chat].username,
          subtitle: subtitle,
          date: date,
          dateString:
            date.getHours().toString() + ":" + date.getMinutes().toString(),
          unread: this.props.chats[chat].unread
        });
      }
    }
    chatDataSource.sort((a, b) => (a.date < b.date ? 1 : -1));
    return (
      <ChatList
        className="chat-list"
        dataSource={chatDataSource}
        onClick={this.props.onClick}
      />
    );
  }
}

export default AccountList;
