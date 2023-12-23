import { Router } from 'express';
import service from '../services/userService.js';

const userController = Router()

userController.route('/users')
    .get(async (req, res) => {
        try {
            const result = await service.FindUsers();

            if (result) {
                res.json(result);
            } 
            else {
                res.status(404).send();
            }
        } 
        catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })
    .post(async (req, res) => {
        try {
            const body = req.body;

            if (!body) {
              return res.status(400).json({ message: "Invalid request body" });
            }
        
            const result = await service.CreateUser(body);
        
            if (result) {
              return res.status(201).json(result);
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })
    .put(async (req, res) => {
        try {
            const body = req.body;

            if (!body) {
              return res.status(400).json({ message: "Invalid request body" });
            }
        
            const result = await service.UpdateUser(body);
        
            if (result) {
              return res.status(200).json(result);
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })

userController.route('/users/:email')
    .get(async (req, res) => {
        try {
            const id = req.params.email

            if (!id) {
                return res.status(400).json({ message: "Invalid request params" });
            }

            const result = await service.FindUserByEmail(id)

            if(result) {
                res.json(result)
                res.status(200).send()
            }
            else {
                res.status(404)
                   .json({message: "Nenhum usuario encontrado"})
                   .send()
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })
    .delete(async (req, res) => {
        try {
            const id = req.params.email

            if (!id) {
                return res.status(400).json({ message: "Invalid request params" });
            }

            const result = await service.DeleteUser(id)

            if(result) {
                res.status(204).send()
            }
            else {
                res.status(404)
                   .json({message: "Nenhum usuario encontrado"})
                   .send()
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })

export default userController