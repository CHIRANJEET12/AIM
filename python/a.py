import random

def get_choice():
    p_choice = input("Enter a choice (rock, paper, scissors): ")
    options = ["rock", "paper", "scissors"]
    c_choice = random.choice(options)
    choices = {"player": p_choice, "computer": c_choice}
    return choices

def check_win(p_choice, c_choice):
    print(f"You chose {p_choice}, computer chose {c_choice}")
    if p_choice == c_choice:
        return "It's a tie!"
    elif p_choice == "rock":
        if c_choice == "scissors":
            return "Rock smashes scissors! You win!"
        else:
            return "Paper covers rock! You lose."
    elif p_choice == "paper":
        if c_choice == "rock":
            return "Paper covers rock! You win!"
        else:
            return "Scissors cuts paper! You lose."
    elif p_choice == "scissors":
        if c_choice == "paper":
            return "Scissors cuts paper! You win!"
        else:
            return "Rock smashes scissors! You lose."
        

choice = get_choice()
result = check_win(choice["player"],choice["computer"])
print(result)