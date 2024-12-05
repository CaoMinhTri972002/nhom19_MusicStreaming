import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import songsData from './SongData';  // Dữ liệu bài hát
import stringSimilarity from 'string-similarity';  // Thư viện tìm kiếm gần đúng

// Hàm để phân tích câu người dùng và trích xuất từ khóa
const extractKeywords = (query) => {
  const queryLower = query.toLowerCase(); // Chuyển câu nhập thành chữ thường

  // Mở rộng danh sách từ không quan trọng
  const stopWords = [
    "tôi", "muốn", "nghe", "bài", "hát", "nhạc", "của", "tìm", "là", "một", "và", 
    "theo", "được", "làm", "mới", "đi", "lúc", "khi", "sẽ", "có", "với", "trong", 
    "đã", "cho", "nếu", "điều", "vì", "không", "nhưng", "nào", "là", "cùng", "chúng","giúp",
    "có thể", "nhiều", "chưa", "tất cả", "nên", "cả", "cũng", "từ", "hay", "vào", 
    "sẽ", "chỉ", "vì vậy", "đang", "sau", "cũng như", "và những", "hoặc", "mà", "có", 
    "tại", "bởi", "với", "của", "này", "đó", "lại", "kể", "sau", "này", "trong khi", 
    "cũng không", "chính", "có thể", "nói", "chẳng", "ai", "mới", "cùng với", "cái", 
    "nếu như", "đều", "rằng", "nếu mà", "hoặc là", "vì sao", "thì", "bây giờ", "như", 
    "trên", "đến", "dưới", "từng", "tất nhiên", "hẳn", "để", "chắc", "chỉ có", "hơn", 
    "hơn nữa", "ngay cả", "vừa", "tốt", "với lại", "giờ", "một chút", "có lẽ", "bằng", 
    "đôi khi", "thậm chí", "vì thế", "mặc dù", "chứ", "cũng được", "được rồi", "ngược lại",
    "không phải", "dễ dàng", "vì lý do", "một khi", "vào lúc", "lúc này", "sau đó", "khi mà",
    "chưa kể", "ngoài ra", "đúng không", "để mà", "nếu không", "thực sự", "hẳn là", "thậm chí là","tôi", "muốn", "nghe", "bài", "hát", "nhạc", "của", "tìm", "là", "một", "và", 
    "theo", "được", "làm", "mới", "đi", "lúc", "khi", "sẽ", "có", "với", "trong", 
    "đã", "cho", "nếu", "điều", "vì", "không", "nhưng", "nào", "là", "cùng", "chúng",
    "có thể", "nhiều", "chưa", "tất cả", "nên", "cả", "cũng", "từ", "hay", "vào", 
    "sẽ", "chỉ", "vì vậy", "đang", "sau", "cũng như", "và những", "hoặc"
  ];
  

  return queryLower
    .split(' ')  // Chia câu thành các từ
    .filter(word => !stopWords.includes(word))  // Lọc các từ không quan trọng
    .join(' ');  // Nối lại các từ còn lại thành một chuỗi
};

// Hàm tìm kiếm bài hát và nghệ sĩ dựa trên từ khóa
const findSongs = (query) => {
  const cleanedQuery = extractKeywords(query); // Lọc từ khóa từ câu

  const results = [];
  Object.keys(songsData).forEach((artist) => {
    songsData[artist].forEach((song) => {
      // So sánh độ tương đồng tên bài hát và tên nghệ sĩ với từ khóa
      const titleSimilarity = stringSimilarity.compareTwoStrings(song.title.toLowerCase(), cleanedQuery);
      const artistSimilarity = stringSimilarity.compareTwoStrings(song.artist.toLowerCase(), cleanedQuery);

      // Nếu độ tương đồng lớn hơn 0.5 (hoặc mức độ tương thích bạn mong muốn)
      if (titleSimilarity > 0.5 || artistSimilarity > 0.5) {
        results.push(song);
      }
    });
  });

  return results;
};

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Chào bạn! Bạn muốn tìm nhạc gì?' },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (query.trim()) {
      const results = findSongs(query); // Tìm kiếm bài hát

      const newMessages = [
        ...messages,
        { id: Math.random().toString(), text: `Bạn tìm: ${query}` },
      ];

      if (results.length > 0) {
        const resultText = results
          .map((song) => `${song.title} - ${song.artist}`)
          .join(', ');
        newMessages.push({
          id: Math.random().toString(),
          text: `Tôi tìm thấy các bài hát cho bạn: ${resultText}`,
        });
        setSearchResults(results);
      } else {
        newMessages.push({
          id: Math.random().toString(),
          text: 'Không tìm thấy bài hát nào với từ khóa này.',
        });
        setSearchResults([]);
      }

      setMessages(newMessages);
      setQuery('');
    }
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MusicPlayer', {
        title: item.title,
        artist: item.artist,
        file: item.file,  // Giả sử 'file' chứa URL hoặc tham chiếu đến bài hát
        nextSong: item.nextSong,
        previousSong: item.previousSong,
      })}
    >
      <View style={{
        padding: 10,
        backgroundColor: '#d1e7ff',
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#007bff',
      }}>
        <Text style={{ color: '#000', fontSize: 16 }}>{item.title} - {item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderMessageItem = ({ item }) => (
    <View style={{
      padding: 10,
      marginBottom: 5,
      backgroundColor: item.text.includes('Tôi tìm thấy') ? '#c9f7f5' : '#d8f7da',
      borderRadius: 15,
      maxWidth: '80%',
      alignSelf: item.text.includes('Tôi tìm thấy') ? 'flex-start' : 'flex-end',
    }}>
      <Text style={{
        fontSize: 16,
        color: item.text.includes('Tôi tìm thấy') ? '#000' : '#4a4a4a',
      }}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <View style={{ flex: 1, padding: 10 }}>
          <FlatList
            data={[...searchResults, ...messages]}  // Đảm bảo rằng kết quả tìm kiếm hiển thị dưới cùng
            renderItem={({ item }) => {
              if (item.title && item.artist) {
                return renderSongItem({ item });
              }
              return renderMessageItem({ item });
            }}
            keyExtractor={(item) => item.id}
            inverted // Đảo ngược thứ tự để tin nhắn mới xuất hiện dưới cùng
          />

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Nhập tên bài hát hoặc nghệ sĩ bạn muốn tìm..."
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          />

          <Button title="Tìm kiếm" onPress={handleSearch} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
