import re

# =========================#

# PROMPT INJECTION FILTER

# =========================

def sanitize_user_input(text):
    if not text:
        return ""

    # Convert to string safely
    text = str(text)

    # Remove suspicious prompt injection patterns
    blocked_patterns = [
        r"ignore previous instructions",
        r"disregard system prompt",
        r"reveal system prompt",
        r"pretend to be",
        r"you are now",
        r"jailbreak",
        r"bypass restrictions",
        r"developer mode",
        r"system prompt",
        r"<script.*?>.*?</script>",
        r"```.*?```",
    ]

    cleaned_text = text

    for pattern in blocked_patterns:
        cleaned_text = re.sub(
            pattern,
            "",
            cleaned_text,
            flags=re.IGNORECASE | re.DOTALL,
        )

    # Remove excessive spaces
    cleaned_text = re.sub(
        r"\s+",
        " ",
        cleaned_text,
    ).strip()

    # Limit size
    return cleaned_text[:3000]


