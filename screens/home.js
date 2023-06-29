import { useEffect, useState } from "react"
import {Keyboard,Button,StyleSheet,ImageBackground,TextInput, View, Text, FlatList, TouchableOpacity, Modal } from "react-native"
import GlobalStyles from "../styles/globalStyles"
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Home=({navigation})=>{
    const [openModel,setOpenModel] = useState(false)
    const [reviewData,setReviewData]=useState([
        {key:"1", game:"Pokemon", review:"4",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit"},
        {key:"2", game:"Final Fantasy", review:"3",body:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit"},
        {key:"3", game:"Spider-Man 2", review:"5",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet"},
        {key:"4", game:"GTA VI", review:"5",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit"},
    ])
    const [error,setError]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const [game,setGame]=useState("")
    const [body,setBody]=useState("")
    const [review,setReview]=useState("")
    // const [formData,setFormData]=useState({
    //     key:Math.random(),
    //     game:"",
    //     review:"",
    //     body:""
    // })

    const aboutPage=(item)=>{
        navigation.navigate("Review",item)
        
    }
    // const handleChange=(e)=>{
    //     setFormData({...formData,[e.target.name]:e.target.value})
    // }

    useEffect(()=>{
        setError(false)
        setErrorMsg("")
    },[game || body || review])

    const handleSubmit=()=>{
        if(game.length<3){
            setError(true)
            setErrorMsg("Game name must be more than 2 words")
            return;
        }
        if(body.length<20){
            setError(true)
            setErrorMsg("Review must be more than 30 words")
            return;
        }
        if(review>5 ||review<1){
            setError(true)
            setErrorMsg("Rating Range is from 1 to 5")
            return;
        }

        setReviewData((prev)=>{
            return([{key:Math.random(),game,review,body},...prev ])
        })
        setGame("")
        setBody("")
        setReview("")
        setOpenModel(false)
    }
    return(
        <ImageBackground  style={GlobalStyles.container}>
            <Modal visible={openModel}>
                <View style={GlobalStyles.container}>
                    <TouchableOpacity onPress={()=>setOpenModel(false)}>
                        <FontAwesome  style={GlobalStyles.plusIcon} name="minus" color="black" />
                    </TouchableOpacity>
                    <View style={styles.model}>
                        <View style={styles.inputWrapper}>
                            <TextInput 
                                style={styles.input}
                                name="game"
                                placeholder="Name of Game"
                                onChangeText={(val)=>setGame(val)}
                                value={game}
                            />
                            {error && errorMsg==="Game name must be more than 2 words"?<Text style={styles.error}>{errorMsg}</Text>:null}
                        </View>

                        <View style={styles.inputWrapper}>    
                            <TextInput 
                                name="body"
                                style={styles.input}
                                placeholder="Write a review"
                                onChangeText={(val)=>setBody(val)}
                                value={body}
                            />
                            {error && errorMsg==="Review must be more than 30 words"?<Text style={styles.error}>{errorMsg}</Text>:null}
                        </View>

                        <View style={styles.inputWrapper}>
                            <TextInput 
                                name="review"
                                style={styles.input}
                                placeholder="Rating (1-5)"
                                value={review}
                                maxLength={1}
                                pattern={'1-5'}
                                keyboardType="number-pad"
                                onChangeText={(val)=>setReview(val)}
                                
                            />
                            {error && errorMsg==="Rating Range is from 1 to 5"?<Text style={styles.error}>{errorMsg}</Text>:null}
                        </View>
                        <TouchableOpacity >
                            <Button  title="submit" onPress={handleSubmit} color="grey" />
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
            <TouchableOpacity onPress={()=>setOpenModel(true)}>
                <FontAwesome  style={GlobalStyles.plusIcon} name="plus" color="black" />
            </TouchableOpacity>
            <FlatList 
                data={reviewData}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>aboutPage(item)}>
                        <Text style={GlobalStyles.gameCard}>{item.game}</Text>
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}
export default Home

const styles=StyleSheet.create({
    model:{
        padding:20,
        gap:20
    },
    input:{
        borderWidth:1,
        padding:10,
        borderColor:"grey",
        borderRadius:8
    },
    error:{
        color:"red"
    }
})