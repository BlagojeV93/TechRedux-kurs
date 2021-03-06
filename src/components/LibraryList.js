import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, TextInput, ListView } from 'react-native';
import ListItem from './ListItem'

class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.mappedLibraries)
    }

    renderRow(library){
        return <ListItem library={library}/>
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStatetoProps = state => {
    return { mappedLibraries: state.libraries }
}

export default connect(mapStatetoProps)(LibraryList);