from nltk.tokenize import sent_tokenize

def summarize_text(text, num_sentences=3):
    try:
        sentences = sent_tokenize(text)
        if len(sentences) <= num_sentences:
            summary = ' '.join(sentences)
        else:
            summary = ' '.join(sentences[:num_sentences])
        return summary
    except Exception as e:
        print(f"Error during summarization: {e}")
        return ""
