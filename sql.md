select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2019;
                     

select race.racename from race;


select 
