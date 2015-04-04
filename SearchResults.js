/**
 * Search Results Component
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  recipeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Hiragino Kaku Gothic ProN',
    color: '#48BBEC'
  },
  recipeDescription: {
    fontSize: 20,
    fontFamily: 'Hiragino Kaku Gothic ProN',
    color: '#656565',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  }
});

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.recipeId)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image
              style={styles.thumb}
              source={{uri: rowData.foodImageUrl}} />
            <View style={styles.textContainer}>
              <Text style={styles.recipeTitle}>{rowData.recipeTitle}</Text>
              <Text style={styles.recipeDescription}>{rowData.recipeDescription}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

  rowPressed(recipeId) {
    var property = this.props.listings.filter(prop => prop.recipeId === recipeId)[0];
    console.log(property);
  }
}

module.exports = SearchResults;
