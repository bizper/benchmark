export const TESTS = [
    {
        'label': "雅思培训类",
        'value': 'IELTS'
    },
    {
        'label': "思陪（CELPIP）",
        'value': 'CELPIP'
    },
    {
        'label': "TEF",
        'value': 'TEF'
    },
    {
        'label': "TCF",
        'value': 'TCF'
    }
]

export const getCLB = (type, category, score) => {
    if(type === "IELTS") {
        if(category === "LISTENING") {
            if(score >= 4.5 && score < 5.0) return 4
            if(score >= 5.0 && score < 5.5) return 5
            if(score >= 5.5 && score < 6.0) return 6
            if(score >= 6.0 && score < 7.5) return 7
            if(score >= 7.5 && score < 8.0) return 8
            if(score >= 8.0 && score < 8.5) return 9
            if(score >= 8.5) return 10
        }
        if(category === "READING") {
            if(score >= 3.5 && score < 4.0) return 4
            if(score >= 4.0 && score < 5.0) return 5
            if(score >= 5.0 && score < 6.0) return 6
            if(score >= 6.0 && score < 6.5) return 7
            if(score >= 6.5 && score < 7.0) return 8
            if(score >= 7.0 && score < 8.0) return 9
            if(score >= 8.0) return 10
        }
        if(category === "WRITING") {
            if(score >= 4.0 && score < 5.0) return 4
            if(score >= 5.0 && score < 5.5) return 5
            if(score >= 5.5 && score < 6.0) return 6
            if(score >= 6.0 && score < 6.5) return 7
            if(score >= 6.5 && score < 7.0) return 8
            if(score >= 7.0 && score < 7.5) return 9
            if(score >= 7.5) return 10
        }
        if(category === "SPEAKING") {
            if(score >= 4.0 && score < 5.0) return 4
            if(score >= 5.0 && score < 5.5) return 5
            if(score >= 5.5 && score < 6.0) return 6
            if(score >= 6.0 && score < 6.5) return 7
            if(score >= 6.5 && score < 7.0) return 8
            if(score >= 7.0 && score < 7.5) return 9
            if(score >= 7.5) return 10
        }
    }
    return ""
}