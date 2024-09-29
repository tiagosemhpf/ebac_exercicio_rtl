import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário nº 1 adicionado via testes com sucesso',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário nº 2 adicionado via testes com sucesso',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});