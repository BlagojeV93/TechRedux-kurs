import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux'
import CardSection from './common/CardSection'
import * as actions from '../actions'

class ListItem extends Component {

    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text>{this.props.library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {

        return (

            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.title}>{this.props.library.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id

    return { expanded: expanded }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default connect(mapStatetoProps, actions)(ListItem)
