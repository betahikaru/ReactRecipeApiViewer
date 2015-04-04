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
} = React;

var ReactRecipeApiViewer = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          This is &lt;Text&gt;
        </Text>
      </View>
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
});

AppRegistry.registerComponent('ReactRecipeApiViewer', () => ReactRecipeApiViewer);
