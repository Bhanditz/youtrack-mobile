import React, {View, Text, TextInput} from 'react-native'
import styles from './create-issue.styles';
import Header from '../../components/header/header';

export default class CreateIssue extends React.Component {
    createIssue() {

    }

    _focusOnSummary() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Header leftButton={<Text>Cancel</Text>}
                        rightButton={<Text>Create</Text>}
                        onRightButtonClick={this.createIssue.bind(this)}>
                    <Text>New Issue</Text>
                </Header>
                <View>
                    <View>
                        <TextInput
                            autoFocus={true}
                            style={styles.summaryInput}
                            placeholder="Summary"
                            returnKeyType="next"
                            onSubmitEditing={() => this._focusOnSummary()}
                            onChangeText={(summary) => this.setState({summary})}/>
                    </View>
                    <View style={styles.separator}/>
                    <View>
                        <TextInput
                            autoFocus={true}
                            style={styles.descriptionInput}
                            multiline={true}
                            placeholder="Description"
                            onChangeText={(description) => this.setState({description})}/>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </View>
        );
    }
}