main wrapper (title, calculator) - display flex - column
title - h1 with divs for both words

calculator wrapper contains 2 children (bill form, tip amount/total display) - mobile - display flex - column
                                                                             - desktop - row
bill form -
    bill label
    bill input
    select tip grid (2 col mobile, 3 col desktop. could use css grid) - 
        5 buttons + custom input
    number of ppl label
    number of ppl input

tip amount/total component - 
    tip amount / person label > amount displayed
    total /person > total displayed
    reset button 


states - bill input, number of ppl input, tip button selected, custom tip form, tip amount, total

reset button on click/submit - clears states

particulars - need to place icons in inputs, total per person state only updates if number of ppl input has value > 0

how to calculate tip amount - bill total * .percentage

how to calculate grand total - bill total + tip amount

how to calculate total per person - grand total / person amount


