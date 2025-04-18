import styles from './Codon.module.css';
import Textarea from '@components/Textarea';
import { Button } from '@/components/Button';
import Text from '@components/Text';
import { useState, useRef } from 'react';

function Codon() {
    const [Codons, setCodons] = useState("");
    const CodonRef = useRef(null);


    return(
        <div
        className={styles.Codon}>
            <header
            className={styles.Heading}>
                코돈 분석표
            </header>

            <main
            className={styles.Main}>
                <section 
                className={styles.InputSection}>
                    <Textarea
                    Label={<Text
                        className={styles.TextareaLabel}>코돈</Text>
                    }
                    placeholder="코돈을 입력하세요"
                    variant="subtle"
                    ref={CodonRef}
                    />
                    <Button
                    variant="solid"
                    color="gray"
                    rounded="md"
                    >
                        <Text
                        className={styles.SubmitBtnText}>
                            제출하기
                        </Text>
                    </Button>
                </section>
            </main>
        </div>
        

        
    )
}