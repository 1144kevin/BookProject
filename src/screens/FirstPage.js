import React from "react";
import { Box } from "@gluestack-ui/themed"
import AlbumList from "../components/BookList";
import sections from "../json/book_section.json";

const AlbumScreen = ({ navigation }) => {
    return (
        <Box bgColor="white" height="100%">
            <AlbumList
                sections={sections}
                navigation={navigation}
            />
        </Box>
    );
};

export default AlbumScreen;