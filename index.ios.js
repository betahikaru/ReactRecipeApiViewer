/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,

  NavigatorIOS,
} = React;

var SearchPage = require('./SearchPage');

var ReactRecipeApiViewer = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.natigator}
        initialRoute={{
          component: SearchPage,
          title: 'Recipe Finder',
        }}
        tintColor="#4A90C7"
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  natigator: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactRecipeApiViewer', () => ReactRecipeApiViewer);
