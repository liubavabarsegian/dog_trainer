class TrainController < ApplicationController

  

  def change_dog_pic(action)
    case action
    when "Стоять"
      @dog_picture = "standing.png"
    when "Лежать"
      @dog_picture = "lying.png"
    when "Сидеть"
      @dog_picture = "sitting.png"
    when "Дай"
      @dog_picture = "paw.png"
    when "Кушать"
      @dog_picture = "eating.png"
    when "Эх"
      @dog_picture = "eh.png"
    end
  end

  def change_person_pic(emotion)
    case emotion
    when "Ура"
      @person_picture = "happy.png"
    when "Не ура"
      @person_picture = "wrong.png"
    else
      @person_picture = "neutral.png"
    end
  end

  def refresh
    puts params
    @command = params[:command] 
    output_signal = 'Н'
    dog_chooses_what_to_do = ["Дай", "Стоять", "Сидеть", "Лежать"].sample
    change_dog_pic(dog_chooses_what_to_do)
    puts dog_chooses_what_to_do
    puts @dog_picture
    if dog_chooses_what_to_do != @command
      change_person_pic("Не ура")
    else
      change_person_pic("Ура")
    end
    sleep(3)
    params[:person_picture] = @person_picture
    params[:dog_picture] = @dog_picture
    puts params
  end
end
