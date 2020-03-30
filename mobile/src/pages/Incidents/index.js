import React, {useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]); //preenchido com array pq o retorno será um array

    const [total, setTotal] = useState (0); //total de casos

    const [page, setPage] = useState(1); //paginação (inicia na página 1)
    const [loading, setLoading] = useState(false); // carrega uma página por vez
    
    const navigation = useNavigation();
    

    function navigateToDatail(incident){
        navigation.navigate('Detail', { incident }); //rota que será carregada e o conteúdo (incident)

    }


    async function loadIncidents(){
        if (loading) {
            return; //se os casos ja estiverem sendo carregados, não carregará novamente se o usuário solicitar
        }

        if(total > 0 && incidents.length == total){ //se não houver mais nada a ser carregado
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page } //passa a página atual
        }); //pega os dados da api

        setIncidents([... incidents, ...response.data]); //... significa todos

        setTotal(response.headers['x-total-count']); //total de registros do banco
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();

    }, []);

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>. 
                </Text>
            </View>

            <Text style={styles.title}> Bem vindo!!!</Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)} //id do incident
                data={incidents} //itens para scroll
                showsVerticalScrollIndicator={false} //oculta o scroll
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2} //porcentagem. Só carrega novos itens se estiver 20% do final da lista
                renderItem={({ item: incident }) => ( //passando o conteudo de item para incident
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG: </Text>
                    <Text style={styles.incidentValue}>{incident.name} </Text>
                    
                    <Text style={styles.incidentProperty}>CASO: </Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR: : </Text>
                    <Text style={styles.incidentValue}>{incident.value} </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => navigateToDatail(incident)} //colocando o () => uma função é passada em vez do retorno dela
                        
                        >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>

                )}

            />


        </View>
    )
}