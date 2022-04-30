import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const TodoItem = ({todo, toggleTdoListItemStatus, deleteTodoListItem}) =>{
    const handleToggleTdoListItemStatus = () =>{
        toggleTdoListItemStatus(todo.id, todo.done);
    };

    const label = todo.done ? "未完了リスト":"完了リスト";
    const setColorScheme = todo.done ? "pink" : "bule";

    const handleDeleteTodoListItem = () =>{
        deleteTodoListItem(todo.id);
    };

    return (
        <ListItem
            borderWidth="1px"
            p="4" mt="4" bg="white"
            borderRadius="md"
            borderColor="gray.300"
        >
            <Text mb="6">{todo.content}</Text>
            <Flex align="center" justify="flex-end">
                <Button 
                    colorScheme={setColorScheme}
                    variant="outline"
                    size="sm"
                    onClick={handleToggleTdoListItemStatus}
                >
                    {label}
                </Button>
                <IconButton
                    icon={<DeleteIcon/>}
                    variant="unstyled"
                    aria-label="delete"
                    onClick={handleDeleteTodoListItem}
                />
            </Flex>
        </ListItem>
    );
};