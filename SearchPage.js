/**
 * Search Page Component
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for recipes to cook!
        </Text>
        <Text style={styles.description}>
          Search by food-name, material-name.
        </Text>
      </View>
    );
  }
}

module.exports = SearchPage;
